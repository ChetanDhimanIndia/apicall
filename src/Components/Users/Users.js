import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((usersdata) => this.setState({ users: usersdata.data }));
  }

  render() {
    console.log(this.state.users);
    const { users } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="title-text">
                <h4>Users</h4>
              </div>
              <p>We are fetching all users from reqres API</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="home"
                  role="tabpanel"
                ></div>
                <div className="table-responsive">
                  <table className="table ">
                    <thead className=" navbar-dark bg-primary">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <br />
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {users.map((users) => {
          return (
            <div>
              <div key={users.id}></div>
              <div className="event-schedule-area-two bg-color pad100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade active show"
                          id="home"
                          role="tabpanel"
                        >
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr className="inner-box border-bottom-0">
                                  <th scope="row">
                                    <div className="event-date">
                                      <span>{users.id}</span>
                                    </div>
                                  </th>
                                  <td>
                                    <div className="event-img">
                                      <img avatar src={users.avatar} alt="" />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="event-wrap">
                                      <h5>{users.first_name}</h5>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="event-img">
                                      <p>{users.last_name}</p>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="event-img">
                                      <p>{users.email} </p>
                                    </div>
                                    {/* <div className="event-wrap">
                                    </div> */}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </div>
    );
  }
}
