function ListItem(props) {
    const { font, children, key } = props;
    const fontWeight = font === "bold" ? "font-bold" : "font-light";

    return (
        <li key={key} className={`break-word ${fontWeight}`}>
            <input
                type="checkbox"
                className="mx-1 form-checkbox text-orange-600 bg-white border-gray-300"
            />
            {children}
        </li>
    );
}

ListItem.defaultProps = {
    type: "normal",
};

export default ListItem;
