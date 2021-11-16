class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Ben"
          hobbies={["Playing with kittens", "Coding", "Football"]}
        />
        <Friend
          name="Sarah"
          hobbies={[
            "Playing with kittens",
            "Sleeping",
            "Watching Rubbish on tv",
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
