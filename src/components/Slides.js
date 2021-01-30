import React from "react";
import { Button, Space, Card, Skeleton, PageHeader } from "antd";

const url = "https://api.mockaroo.com/api/e0220220?count=10&key=72f8fad0";

const mockData = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises",
  },
  {
    title: "First 10 pushups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush",
  },
  {
    title: "Next 20 squads",
    text: "Squads are important. Remember to keep your back straight",
  },
  {
    title: "Finally 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion",
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time",
  },
];

class Slides extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [],
      loading: false,
    };
  }

  fetchRemoteData() {
    // TODO: fetch remote data using the above URL
  }

  fetchMockData() {
    return new Promise((resolve) => {
      resolve(mockData);
    });
  }

  fetchData(mockData = true) {
    this.setState({ loading: true });
    const fetchFn = mockData ? this.fetchMockData : this.fetchRemoteData;
    setTimeout(() => {
      fetchFn()
        .then((data) => {
          this.setState({ slides: data });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 1000);
  }

  componentDidMount() {
    this.fetchData(true);
  }

  render() {
    const { slides, loading } = this.state;

    return (
      <div>
        <PageHeader title="Slide shows" />
        <Space direction="vertical">
          <Space>
            <Button data-testid="button-restart" type="primary">
              Restart
            </Button>
            <Button data-testid="button-prev" type="primary">
              Prev
            </Button>
            <Button data-testid="button-next" type="primary">
              Next
            </Button>
          </Space>

          <Skeleton loading={loading} active>
            <Card
              id="slide"
              title="<Slide title>"
              extra={<div>{"<Slides total count>"}</div>}
            >
              <p data-testid="text">{"<Slide text>"}</p>
            </Card>
          </Skeleton>
        </Space>
      </div>
    );
  }
}

export default Slides;
