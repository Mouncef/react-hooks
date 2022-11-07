import React from "react";

const Tabs = ({children}) => {
    const childrenArray = React.Children.toArray(children);
    const [current, setCurrent] = React.useState(childrenArray[0].key)
    const newChildren = childrenArray.map(child => {
        return React.cloneElement(child, {selected: child.key === current})
    });
    return <div>
        <nav>
            {childrenArray.map(child => (
                <button onClick={() => setCurrent(child.key)} key={child.key}>{child.props.title}</button>
            ))}
        </nav>
        <section>
            {newChildren}
        </section>
    </div>
};

export default Tabs;