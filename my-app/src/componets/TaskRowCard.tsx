import TaskInterface from './TaskInterface';


export default function TaskRowCard(props: TaskInterface  ) {
    
      
  return (
    <div >
      <h2>------ | Example {props.name} |</h2>
    </div>
  );
}