import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header";
import { expect } from '@jest/globals';
import React, { useState as useStateMock } from 'react';


import { fireEvent, getByText, render,screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';

import DarkContext from "../../../DarkContext";
import { useState } from "react";


describe('Header componet test cases', () =>{

    test('Header componet should have login button', () =>{

        render(
            <BrowserRouter>

                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const LoginButton  =  screen.getByRole('button',{name:'Login'});

        expect(LoginButton).toBeInTheDocument();

        
    });

    test('should change login button to logout', () =>{

        render(
            <BrowserRouter>
               
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const loginButton  =  screen.getByRole('button',{name:'Login'});

        fireEvent.click(loginButton)

        const logoutButton  =  screen.getByRole('button',{name:'Logout'});
        expect(logoutButton).toBeInTheDocument();

        
    });

    test('should change logout  button to login', () =>{

        render(
            <BrowserRouter>
               
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const loginButton  =  screen.getByRole('button',{name:'Login'});

        fireEvent.click(loginButton);

        const logoutButton  =  screen.getByRole('button',{name:'Logout'});
        fireEvent.click(logoutButton);

        expect(loginButton).toBeInTheDocument();

        
    });


    test('Header componet should render', () =>{

        

        render(
           
            <BrowserRouter>
                 
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const lightButton  =  screen.getByRole('button',{name:'Light'});
        

        // fireEvent.click(lightButton);

        // const darkButton  =  screen.getByRole('button',{name:'Dark'});

        expect(lightButton).toBeInTheDocument();

        
    });

    test('Header componet should render', () =>{

        render(
            <BrowserRouter>

                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const onlineIcon  =  screen.getByText('Internet Status: ✅')

        expect(onlineIcon).toBeInTheDocument();

        
    });


    test('Header componet should render', () =>{

        render(
            <BrowserRouter>

                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        act(() =>{
            window.dispatchEvent(new Event('offline'));
           
        });

        const offlineIcon  =  screen.getByText('Internet Status: 🔴')

        expect(offlineIcon).toBeInTheDocument();

        
    });

    test('render correctly with Dark mode', () =>{

        const isDark = true;
        const setDark = jest.fn(); // Mock setDark function
       
        
        render(
            <BrowserRouter>

                <Provider store={appStore}>
                    <DarkContext.Provider value={{isDark:isDark, setDark}} >
                         <Header/>
                    </DarkContext.Provider>
                </Provider>
            </BrowserRouter>
        );

        const headerDark = screen.getByTestId('dark');
        expect(headerDark).toHaveClass('dark');

        const darkBtn = screen.getByRole('button', {name:'Dark'});

        fireEvent.click(darkBtn);
        // const lightBtn = screen.getByRole('button', {name:'Light'});

        // expect(lightBtn).toBeInTheDocument();
    })
    test('render correctly with Light mode', () =>{

        const isDark = false;
        const setDark = jest.fn(); // Mock setDark function
      
        
        render(
            <BrowserRouter>

                <Provider store={appStore}>
                    <DarkContext.Provider value={{isDark:isDark, setDark}} >
                         <Header/>
                    </DarkContext.Provider>
                </Provider>
            </BrowserRouter>
        );

        // const headerDark = screen.getByTestId('dark');
        // expect(headerDark).toHaveClass('dark');

        // const darkBtn = screen.getByRole('button', {name:'Dark'});

        // fireEvent.click(darkBtn);
        const lightBtn = screen.getByRole('button', {name:'Light'});

        expect(lightBtn).toBeInTheDocument();
    })


});