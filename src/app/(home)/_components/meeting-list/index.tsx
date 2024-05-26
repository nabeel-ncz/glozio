"use client";
import { useState } from "react";
import { Card } from "./card";
import { useRouter } from "next/navigation";

export const MeetingList = () => {
    
    const [meetingState, setMeetingState] = useState<string>('');
    const router = useRouter();
    
    return (
        <>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <Card
                    img="/icons/add-meeting.svg"
                    title="New Meeting"
                    className="bg-backgroundacc"
                    description="Start an instant meeting"
                    handleClick={() => setMeetingState('isInstantMeeting')}
                />
                <Card
                    img="/icons/join-meeting.svg"
                    title="Join Meeting"
                    description="via invitation link"
                    className="bg-card-orange"
                    handleClick={() => setMeetingState('isJoiningMeeting')}
                />
                <Card
                    img="/icons/schedule.svg"
                    title="Schedule Meeting"
                    description="Plan your meeting"
                    className="bg-card-purple"
                    handleClick={() => setMeetingState('isScheduleMeeting')}
                />
                <Card
                    img="/icons/recordings.svg"
                    title="View Recordings"
                    description="Meeting Recordings"
                    className="bg-card-green"
                    handleClick={() => router.push('/recordings')}
                />
            </section>
        </>
    )
}