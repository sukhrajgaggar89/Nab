import React from "react";
import HomeLoanApi from "../api/HomeLoanApi";
import HomeLoanForm from './HomeLoanForm'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    formLoading: false,
    formError: null,
    formData: null
  };

  componentDidMount() {
    const fetchData = async () => {
      const res = await HomeLoanApi.get("/HomeLoandata");
      this.setState({formData:res.data})
    };

    fetchData();
  }

  render() {
    if (this.state.formLoading) return <div>Loading...</div>;
    if (this.state.formError) return <div>Error...</div>;
    if (!this.state.formData) return <div>Data not found</div>;
    return (<div>
        <HomeLoanForm data={this.state.formData} />
    </div>)
  }
}

export default App;
