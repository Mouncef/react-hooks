import React from "react";
import './App.css';
import Tabs from "./component/Tabs";
import Tab from "./component/Tab";


const App = () => {

    return <Tabs>
        {[...new Array(2)].map((v,k) => (
            <Tab title={`Onglet n° ${k}`} key={k}>
                {k} It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            </Tab>
        ))}
        <Tab title={`Premier onglet`} key="premier">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
        </Tab>
        <Tab title={"Second onglet"}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Tab>
    </Tabs>
};

export default App;
