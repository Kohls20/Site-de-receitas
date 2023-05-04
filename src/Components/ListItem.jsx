function ListItem(props) {
    const { font, children, key, type } = props;
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

/*
gerado pelo chatgpt

function ListItem({ font, children, checkbox, classes }) {
    const fontWeight = font === "bold" ? "font-bold" : "font-light";
    const listItemClasses = `break-word ${fontWeight} ${classes}`;

    return (
        <li className={listItemClasses}>
            {checkbox && (
                <input
                    type="checkbox"
                    className="mx-1 form-checkbox text-orange-600 bg-white border-gray-300"
                />
            )}
            {children}
        </li>
    );
}

function ListCardItem(props) {
    const { font, children, classes } = props;
    const cardClasses =
        "overflow-hidden w-11/12 h-36 my-3 mx-auto rounded-xl flex border-2 border-orange-800";

    return (
        <ListItem font={font} classes={`${cardClasses} ${classes}`}>
            {children}
        </ListItem>
    );
}

ListCardItem.defaultProps = {
    font: "normal",
};

function ListNormalItem(props) {
    const { font, children, classes } = props;

    return (
        <ListItem font={font} checkbox classes={classes}>
            {children}
        </ListItem>
    );
}

ListNormalItem.defaultProps = {
    font: "normal",
};

export { ListCardItem, ListNormalItem };
*/
