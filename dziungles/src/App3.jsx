import Box from './Components/Circle';
// import Simple from './Components/Simple';

// const a = 5;
// const b = 6;

const data = [

    {
    ls: '1px',
    circleColor: 'yellow',
    circleNumber: 90
  },
  {
    ls: '1px',
    circleColor: 'green',
    circleNumber: 45
  },
  {
    ls: '1px',
    circleColor: 'red',
    circleNumber: 43
  },{
    ls: '1px',
    circleColor: 'grey',
    circleNumber: 23
  },{
    ls: '1px',
    circleColor: 'black',
    circleNumber: 7
  },{
    ls: '1px',
    circleColor: 'brown',
    circleNumber: 34
  },{
    ls: '1px',
    circleColor: 'pink',
    circleNumber: 37
  },
  {
    ls: '1px',
    circleColor: 'blue',
    circleNumber: 87
  },
];


function App() {

  return (
    <>
    {data.map((circle, index) => <Box key={index} circleColor={circle.circleColor} ls={circle.ls} circleNumber={circle.circleNumber} />)}
    </>
  );

}

export default App;