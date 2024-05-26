'use client';
import { useEffect, useState } from 'react';
import { DeviceSettings, VideoPreview, useCall, useCallStateHooks, } from '@stream-io/video-react-sdk';
import { Button } from '@/components/ui/button';
import { MeetingNotStartedAlert } from './meeting-not-started-alert';
import { MeetingEndedAlert } from './meeting-ended-alert';

export const MeetingSetup = ({
    setIsSetupComplete,
}: {
    setIsSetupComplete: (value: boolean) => void;
}) => {

    const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
    const callStartsAt = useCallStartsAt();
    const callEndedAt = useCallEndedAt();
    const callTimeNotArrived = callStartsAt && new Date(callStartsAt) > new Date();
    const callHasEnded = !!callEndedAt;

    const call = useCall();

    if (!call) {
        throw new Error(
            'useStreamCall must be used within a StreamCall component.',
        );
    }

    const [isMicCamToggled, setIsMicCamToggled] = useState(false);

    useEffect(() => {
        if (isMicCamToggled) {
            call.camera.disable();
            call.microphone.disable();
        } else {
            call.camera.enable();
            call.microphone.enable();
        }
    }, [isMicCamToggled, call.camera, call.microphone]);

    if (callTimeNotArrived)
        return (
            <MeetingNotStartedAlert startsAt={callStartsAt.toLocaleString()} />
        );

    if (callHasEnded)
        return (
            <MeetingEndedAlert />
        );

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-foreground">
            <h1 className="text-center text-2xl font-bold">Setup</h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        checked={isMicCamToggled}
                        onChange={(e) => setIsMicCamToggled(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                className="rounded-md bg-green-500 px-4 py-2.5"
                onClick={() => {
                    call.join();
                    setIsSetupComplete(true);
                }}
            >
                Join meeting
            </Button>
        </div>
    );
};
