import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../../mocks/ResList.json';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import DarkContext from '../../../DarkContext';


global.fetch = jest.fn(() =>{

    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        },
    })
});

  it("Should Search Res List for burger text input ", async () => {
   
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const resCardBefore = screen.getAllByTestId('resCard');
    expect(resCardBefore.length).toBe(20)

    
    const searchButton  =  screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, {target: {value:"pizza"}});
    fireEvent.click(searchButton);

    const resCardAfter = screen.getAllByTestId('resCard');

    

    //console.log(searchInput);

     expect(searchButton).toBeInTheDocument();
     expect(resCardAfter.length).toBe(3);
  
  });


  it("Should show invalid search result ", async () => {
   
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // const resCardBefore = screen.getAllByTestId('resCard');
    // expect(resCardBefore.length).toBe(20)

    
    const searchButton  =  screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, {target: {value:"pissa"}});
    fireEvent.click(searchButton);

    const noRes = screen.getByText('Restaurant not available');

    

    //console.log(searchInput);

     expect(noRes).toBeInTheDocument();
     
  
  });


  it('should filter the list of restaurants', async () =>{

    await act( async () => render(
    <BrowserRouter><Body/></BrowserRouter>
    ));

    const filterButton = screen.getByRole('button', {name: 'Top Rated Restaurants'});

    fireEvent.click(filterButton);

    const resCards = screen.getAllByTestId('resCard');

    expect(resCards.length).toBe(7);

  });

  it('should show error when network is down', async () =>{

    await act( async () => render(
    <BrowserRouter><Body/></BrowserRouter>
    ));

    act(() =>{
      window.dispatchEvent(new Event('offline'));

    })

    expect(screen.getByTestId('internet')).toBeInTheDocument();

  });

  // it('should show all restaurant cards while clicking All Restaurants button', async () =>{
     
  //   await act( async () => {
  //     <BrowserRouter><Body/></BrowserRouter>
  //   });

  //   const allResBtn = 
  //   fireEvent.click(allResBtn);
  //   const rescards = screen.getAllByTestId('resCard');

  //   expect(rescards.length).toBe(20)

  // })

  it('should filter the list of restaurants', async () =>{

    await act( async () => render(
    <BrowserRouter><Body/></BrowserRouter>
    ));

    const allResButton = screen.getByRole('button', {name: 'All Restaurants'});

    //console.log(allResButton)

    fireEvent.click(allResButton);

    const resCards = screen.getAllByTestId('resCard');

    expect(resCards.length).toBe(20);

  });

  it("Should Search Res List for burger text input ", async () => {
   
    const isDark = true;
    const setDark = jest.fn();

    await act(async () =>
      render(
        <BrowserRouter>
        <DarkContext.Provider value={{isDark:isDark, setDark}}>
           <Body />
        </DarkContext.Provider>
         
        </BrowserRouter>
      )
    );

    expect(screen.getByTestId('bodyDark')).toHaveClass('dark');
  
  });




  