import React from 'react'
import { Layout, Menu, Icon,Button } from 'antd';
import 'antd/dist/antd.css'; 
import Stopwatch from './Stopwatch'
import Countdown from './Countdown'
import StopWatch from './Stopwatch';
import questions from './TestData.json'
import Options from './Options'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    slideClick:1

  };
  previousHandler=()=>{
    if(this.state.slideClick===1){
      console.log(this.state.slideClick);
      this.setState({slideClick:1})}else{
    this.setState({slideClick:this.state.slideClick-1})}
  }

  nextHandler=()=>{
    if(this.state.slideClick===questions.length){
      this.setState({slideClick:1})
    }else{
    this.setState({slideClick:this.state.slideClick+1})}
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  slideClickHandler=(id)=>{
    // console.log(id);
    this.setState({slideClick:id})
  }
  render() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"onSelect={(id)=>{this.slideClickHandler(id.key)}}>
              {questions.map((i)=>{
               return (<Menu.Item key={i.id}>
                  <Icon type="desktop" />
                  <span>{i.abr}</span>
                </Menu.Item>      
               )
              })}
            
           </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 ,textAlign:"center"}}> <h1><strong>QUESTIONAIRE:{questions.Question}</strong></h1>
          
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>
           
            </div>
             <div className="Content"style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
              <div style={{minHeight:120}}>
              {/* {questions.map((i)=>{
                if(i.id==this.state.slideClick){
                  return(<span key={i.id}>{i.Question}</span>)
                }
              })
            } */}
              {questions.map((i)=>{
                if(i.id==this.state.slideClick){
                  return(<div key={i.id}>
                    <h1>
                      {i.Question}
                    </h1>
                    <br/><br/>
                    {i.options.map((i)=>{
                      return <div style={{fontSize:"20px"}}>
                        <input type="radio" />&emsp;
                        <label > {i}</label>
                        
                        </div>
                    })}
                  </div>)
                }
              })
            }<br/><br/><br/><br/>
                </div>
              <div style={{minHeight:50 }}>
              <Button onClick={this.previousHandler}style={{backgroundColor:"RGB(0,19,43)",color:"white",marginLeft:"40px",lineHeight:"0px",padding:"25px",fontSize:"20px"}}>Previous</Button>
              <Button onClick={this.nextHandler} style={{float:"right",backgroundColor:"RGB(0,31,66)",color:"white",marginRight:"100px",lineHeight:"0px",padding:"25px 25px 25px 25px",fontSize:"20px"}}>Next</Button></div>
               </div>          
                <div style={{ margin: '46px 0' }}>
            </div>

            <div style={{ padding: 24, background: '#fff', minHeight: 100 }}>
          <StopWatch/>
               </div>
        
        </Content>
          
          <Footer style={{ textAlign: 'center' }}>©2019 Created by ArrJay</Footer>
        </Layout>
      </Layout>
    );
  }
}
