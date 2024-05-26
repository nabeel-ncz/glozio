import { Alert } from "@/components/alert"

export const MeetingEndedAlert = () => {
    return (
        <Alert
            title="The call has been ended by the host"
            iconUrl="/icons/call-ended.svg"
        />
    )
}