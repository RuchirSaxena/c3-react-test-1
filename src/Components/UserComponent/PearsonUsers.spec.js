import { PearsonUsers } from './PearsonUsers';
import User from './Pearson';
import removeDuplicateUsers from "../../utility";

const pearsonUsersWrapper = shallow(<PearsonUsers />);

//Mocking user Api 
jest.mock("../../Services/userDataApi");


describe('PearsonUsers test cases', () => {

  it("fetches User data from user api and renders them on mount", (done) => {
    setTimeout(() => {
      pearsonUsersWrapper.update();
      const state = pearsonUsersWrapper.state();
      //checking state is updated after reciving user from api and delete the duplicate
      expect(state.users.length).toEqual(4);
      expect(pearsonUsersWrapper.find("User").length).toEqual(4);
      done();
    });
  });
  /**
   * Testing the state  after adding default user and users added through 
   * mocked Api
   */
  it('initializes the `state` with  list of `user`', () => {
    expect(pearsonUsersWrapper.state().users).toEqual([{
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    },
    {
      "id": 1,
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    }
    ]);
  });

  //render a list of users from the state 
  it('render a list of users from the state correctly',()=>{
    expect(pearsonUsersWrapper).toMatchSnapshot();
  });

  /*
  test fuctionality to remove duplicated users from the state ,Also checkking the fuctionality of  removeDuplicateUsers() utility function to remove duplicates from array of object
  */
  it("To fuctionality to remove duplicated users from the state", () => {
    expect(removeDuplicateUsers(pearsonUsersWrapper.state().users)).toEqual([{
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    },
    {
      "id": 1,
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    }
    ]);

  })

  //Test functionality to delete a user from the state.
  it("test functionality to delete a user from the state", () => {
    const id = 1;
    pearsonUsersWrapper.instance().handleDeleteUser(id);
    expect(pearsonUsersWrapper.state().users.length).toEqual(3);
  });

  //check handleDeleteUser fires on click
  it('check handleDeleteUser fires on click', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <User id={1} first_name={"George"} last_name={"Bluth"} avatar="128.jpg" handleDeleteUser={spy} />
    );

    wrapper
      .find("div").find("a")
      .first()
      .simulate("click");

    expect(spy.calledOnce).toBe(true);
  });



  //Match the snapshot for User Component
  it('matches the snapshot for User Component', () => {
    const tree = renderer.create(<User 
    id={1} 
    first_name={"George"}
    last_name={"Bluth"} avatar="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
     handleDeleteUser={() => { }} />)
     .toJSON()

    expect(tree).toMatchSnapshot()
  });


})








