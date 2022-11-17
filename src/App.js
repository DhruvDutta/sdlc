//import logo from './logo.svg';
import './App.css';
import Checkpoint from './checkpoint'
import Ball from './ball'
import CharBall from './charball';
function App() {
  return (
    <div className="App container-fluid py-5">
        <div className='container box'>
          <div className="head">
            Journey Begins
          </div>
          <div className='date text-center'>
            <div className='col-sm-6 col-12'>
              November 2022
            </div>
          </div>
          <CharBall char="B"/>
          <div className="padding d-sm-none"></div>
          <div className='row offset-sm-2 col-sm-8 offset-1 col-10'>
            <Checkpoint date='14 November' para='Brainstorming on how should I make this design. Started making this webpage by setting up a react app. Connected Bootstrap and started working on HTML and CSS. Completed till this component.'/>
            <Checkpoint date='15 November' para='Created all the other components. Started working on getting the colors and backgrounds right. Made a view for mobile. Adjusted the dimensions of the ball and other graphic components.'/>
          </div>
        </div>
        <div className='container box'>
          <h1 className="head">
            App Completed
          </h1>
          <div className='date text-center'>
            <div className='col-sm-6'>
              November 2022
            </div>
          </div>
          <Ball head="Creating" para="When I start a project I think of the bigger problems/challenges first and start by solving them then I gradually keep building the smaller/easier stuff."/>
          <div className="padding d-sm-none"></div>
          <div className='row offset-sm-2 col-sm-8 offset-1 col-10'>
            <Checkpoint date='16 November' para="The design is complete. I don't like random texts so I started typing this projects lifecycle on this page. Created some react components. Which had drastically reduced the lines of code."/>
            <div className="msg col-12 col-sm-4 offset-sm-6">
              <p>This design helped be refresh my memory of a lot of cool stuff I used to play with in CSS. Excited to work on more of these.</p>
            </div>
          </div>
        </div>
        <div className='container box'>
          <h1 className="head">
            App launch
          </h1>
          <div className='date text-center'>
            <div className='col-12 col-sm-6'>
              November 2022
            </div>
          </div>
          <Ball head="Launch" para="I'm using netify to deploy this react app." />
          <div className="padding d-sm-none"></div>
          <div className='row offset-sm-2 col-sm-8 offset-1 col-10'>
            <Checkpoint date='16 November' para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora unde autem atque. Praesentium natus consectetur illum odit ex quo, porro cupiditate, fugit incidunt, beatae omnis. Voluptas, omnis ullam. Repellendus.'/>
            <Checkpoint date='16 November' para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora unde autem atque. Praesentium natus consectetur illum odit ex quo, porro cupiditate, fugit incidunt, beatae omnis. Voluptas, omnis ullam. Repellendus.'/>
          </div>
        </div>
        <div className="container mt-2">
          <div className="col-12 cont p-2">
            Continues....
          </div>
        </div>
    </div>
  );
}
export default App;
