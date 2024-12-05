
import { act, getByText, render,screen } from '@testing-library/react';
import { expect } from '@jest/globals';



import Contact from '../Contact';
import '@testing-library/jest-dom';
import DarkContext from '../../../DarkContext';

test("should load contact us page", ()=>{

    render(<Contact/>);

    //quering
    const heading = screen.getByRole("heading");

    //Assertion

    expect(heading).toBeInTheDocument();
    


});

test("Should have a input for name", () =>{

    render(<Contact/>);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
})

test('should have 2 input fields', ()=>{
    render(<Contact/>);
    const inputs = screen.getAllByRole('textbox');

    expect(inputs.length).toBe(2);
});

test('should have a sumbit button', () =>{
    render(<Contact/>);

    const button = screen.getByText('Submit');

    expect(button).toBeInTheDocument();
})

test('should have a sumbit button', async () =>{

    const isDark = true;
    const setDark = jest.fn();

   await act(async () =>{
    render( 
    <DarkContext.Provider value={{isDark:isDark, setDark}}>
        <Contact/>
      </DarkContext.Provider>);
   })    

     expect(screen.getByTestId('resContactDark')).toHaveClass('dark');
})

