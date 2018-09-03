import React from "react";
import { shallow ,mount } from "enzyme";
import { PearsonUsers } from './Components/UserComponent/PearsonUsers';
import User from "./Components/UserComponent/Pearson";
import renderer from "react-test-renderer";
import sinon from 'sinon';
import  removeDuplicateUsers  from "./utility";




describe('PearsonUsers test cases',()=>{
   //Delete user click button 
  it("calls handleDeleteUser on click", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <User id={1} first_name={"George"} last_name={"Bluth"} avatar="128.jpg" handleDeleteUser={spy} />
    );

    wrapper
      .find("div").find("a")
      .first()
      .simulate("click");

    expect(spy.calledOnce).toBe(true);
  })
  //To remove duplicate from User Data
  it("To test duplicate in User array", () => {
    const data = [
      {
        first_name: 'ruchir',
        last_name: 'saxena'
      },
      {
        first_name: 'ruchir',
        last_name: 'saxena'
      },
      {
        first_name: 'amit',
        last_name: 'raj'
      }
    ];

    const result = removeDuplicateUsers(data, 'first_name', 'last_name');
    expect(result).toEqual([
      {
        first_name: 'ruchir',
        last_name: 'saxena'
      },
      {
        first_name: 'amit',
        last_name: 'raj'
      }
    ]);

  })

  //Match the snapshot for User Component
  it('matches the snapshot for User Component', () => {
    const tree = renderer.create(<User id={1} first_name={"George"} last_name={"Bluth"} avatar="128.jpg" handleDeleteUser={()=>{}} />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('should render 0 users by default',()=>{
    const wrapper = shallow(<User/>)
    const userCount = wrapper.find(User)
    console.log("userCount", userCount)
    expect(userCount.length).toEqual(0)
  })

  
  
})

