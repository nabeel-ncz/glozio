import { Alert } from "@/components/alert"

export const MeetingNotStartedAlert = ({
    startsAt
}: {
    startsAt?: string
}) => {
    return (
        <Alert
            title={`Your Meeting has not started yet. It is scheduled for ${startsAt}`}
        />
    )
}