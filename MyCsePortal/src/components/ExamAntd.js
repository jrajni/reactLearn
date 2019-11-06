import React from 'react'
import { Layout, Menu, Icon,Button } from 'antd';
import 'antd/dist/antd.css'; 
import Stopwatch from './Stopwatch'
import Countdown from './Countdown'
import StopWatch from './Stopwatch';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const questions=[
  {id:1,
      abr:"question 1",
      title:"here my first question"},
  {id:2,
      abr:"question 2",
      title:"here my second question"},
  {id:3,
      abr:"question 3",
      title:"here my third question"},
  {id:4,
      abr:"question 4",
     title:"here my fourth question"},
 {id:5,
  abr:"question 5",
      title:"here my fifth question"},
  {id:6,
      abr:"question 6",
     title:"here my sixth question"},
 {id:7,
  abr:"question 7",
      title:"here my seventh question"},
  {id:8,
      abr:"question 8",
      title:"here my eigth question"},
  {id:9,
      abr:"question 9",
      title:"here my nineth question"},
{id:10,
  abr:"question 10",
      title:"here my tenth question"},
                                               
]
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
          <Header style={{ background: '#fff', padding: 0 }}> <strong>QUESTIONAIRE:</strong></Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' }}>
           
            </div>
             <div className="Content"style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
              <div style={{minHeight:120}}>
          {questions.map((i)=>{
                if(i.id==this.state.slideClick){
                  return(<span key={i.id}>{i.title}</span>)
                }
              })}</div>
                <div style={{minHeight:190}}>Options</div>
              <div style={{minHeight:50 }}>
              <Button onClick={this.previousHandler}>Previous</Button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Button onClick={this.nextHandler}>Next</Button></div>
               


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
