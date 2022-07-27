interface LoneDeletedProps {
    className: string,
    text: string
}

const LoneDeleted = ({className, text}: LoneDeletedProps) => {
    return (
        <div className={className}>
            <h1>
                {text}
            </h1>
        </div>
    )
}

export default LoneDeleted