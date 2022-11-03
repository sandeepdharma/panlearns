import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { OrganisationsGridView } from "./views/OrganisationsGridView/OrganisationsGridView";
import  OrganisationsContentHeader  from "./components/OrganisationsContentHeader/OraganisationsContentHeader";
import { OrganisationsListView } from "./views/OrganisationsListView/OrganisationsListView";
import OrganisationsEditView from './views/OrganisationsEditView/OrganisationsEditView';
import OrganisationsAddView from "./views/OrganisationsAddView/OrganisationsAddView";
import { useState } from "react";
function App() {
  const { Header, Sider, Content } = Layout;
  const [callback,setCallback] = useState('');

  const callbackfunction = (data)=>{
    console.log('callback read')
    setCallback(data)
  }
  return (
    <>
      <Layout className="organizations-grid-view-main-container">
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
          <Router>
                <Route exact path= "/" component={OrganisationsContentHeader}/>
                <Route exact path= "/OrganisationsListView" component={props => <OrganisationsContentHeader callbackfunction={callbackfunction}{...props}/>}/>
                <Switch>
                  <Route exact path="/" component={OrganisationsGridView}/>
                  <Route exact path="/OrganisationsListView" component={props => <OrganisationsListView callbackfunction={callbackfunction}{...props} />  }/>
                  <Route exact path= "/OrganisationsEditView" component={OrganisationsEditView}/>
                  <Route exact path= "/OrganisationsAddView" component={OrganisationsAddView}/>
                </Switch>
              </Router>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
