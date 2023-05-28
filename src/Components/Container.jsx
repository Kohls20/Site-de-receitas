export default function Container(props) {
    const { children, classes, indent } = props;

    return (
        <div
            className={`py-5 mx-5 leading-7 ${classes} ${
                indent !== undefined ? "indent-8" : ""
            }`}
        >
            {children}
        </div>
    );
}
