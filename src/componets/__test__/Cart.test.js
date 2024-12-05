import { describe, expect, jest, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { act, fireEvent, render,screen } from '@testing-library/react';
import RestaruantMenu from '../RestaruantMenu';
import MOCK_DATA from '../../mocks/ResMenu.json';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import Header from '../Header';
import Cart from '../Cart';
import DarkContext from '../../../DarkContext';


global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
});

describe('Integration test cases for adding cart',() =>{

  test('should not show any accordian items', async () =>{

    const isDark = true;
    const setDark = jest.fn();

    await act( async () =>{
      render(
      <BrowserRouter>   
      <Provider store={appStore}>
        <DarkContext.Provider value={{isDark:isDark, setDark}}>
          <RestaruantMenu/>
        </DarkContext.Provider>
      </Provider>
      </BrowserRouter>  )
    });

    // const accordianItem = screen.getByText('Burgers With Millet Bun (6)');
    // fireEvent.click(accordianItem);
    const items = screen.queryAllByTestId('foodItems');

    expect(items.length).toBe(0);

    expect(screen.getByTestId('resMenuDark')).toHaveClass('dark');
  });

    test('should show accordian items', async () =>{

      await act( async () =>{
        render(
        <BrowserRouter>   
        <Provider store={appStore}>
            <RestaruantMenu/>
        </Provider>
        </BrowserRouter>  )
      });

      const accordianItem = screen.getByText('Burgers With Millet Bun (6)');
      fireEvent.click(accordianItem);
      const items = screen.getAllByTestId('foodItems');

      expect(items.length).toBe(6);
      fireEvent.click(accordianItem);
      const itemsafter = screen.queryAllByTestId('foodItems');
      expect(itemsafter.length).toBe(0);

    });

    test('should add items to cart and change cart value of Header componet', async () =>{

      await act( async () =>{
        render(
        <BrowserRouter>   
        <Provider store={appStore}>
            <RestaruantMenu/>
            <Header/>
        </Provider>
        </BrowserRouter>  )
      });

      const accordianItem = screen.getByText('Burgers With Millet Bun (6)');
      fireEvent.click(accordianItem);

      const addBtns = screen.getAllByRole('button', {name: 'Add'});
      fireEvent.click(addBtns[0]);
    //   fireEvent.click(addBtns[1]);
    //   fireEvent.click(addBtns[0]);

      expect(screen.getByText('Cart - (1)')).toBeInTheDocument();
    //   const items = screen.getAllByTestId('foodItems');

    //   expect(items.length).toBe(6);

    });

    test('should add items to cart and change cart value of Header componet', async () =>{

        await act( async () =>{
          render(
          <BrowserRouter>   
          <Provider store={appStore}>
              <RestaruantMenu/>
              <Header/>
              <Cart/>
          </Provider>
          </BrowserRouter>  )
        });
  
        const accordianItem = screen.getByText('Burgers With Millet Bun (6)');
        fireEvent.click(accordianItem);
  
        const addBtns = screen.getAllByRole('button', {name: 'Add'});
        fireEvent.click(addBtns[0]);
        
        const cartItems = screen.getAllByTestId('cartItems');

        expect(cartItems.length).toBe(2);


    });

    test('should add items to cart and change cart value of Header componet', async () =>{

        await act( async () =>{
          render(
          <BrowserRouter>   
          <Provider store={appStore}>
              <RestaruantMenu/>
              <Header/>
              <Cart/>
          </Provider>
          </BrowserRouter>  )
        });
  
        const accordianItem = screen.getByText('Burgers With Millet Bun (6)');
        fireEvent.click(accordianItem);
  
        const addBtns = screen.getAllByRole('button', {name: 'Add'});
        fireEvent.click(addBtns[0]);
        
        const clearBtn = screen.getByRole('button', {name: 'Clear Cart'});
       
        fireEvent.click(clearBtn);

        const empty = screen.getByTestId('emptyCart');

        expect(empty).toBeInTheDocument();


    });

    test('should change quanty using qty buttons in cart componet',async () =>{

        
      await act( async () =>{
        render(
        <BrowserRouter>   
        <Provider store={appStore}>
            <RestaruantMenu/>
            <Header/>
            <Cart/>
        </Provider>
        </BrowserRouter>  )
      });
        const accordianItem = screen.getByText('Burgers With Millet Bun (6)');
        fireEvent.click(accordianItem);
  
        const addBtns = screen.getAllByRole('button', {name: 'Add'});
        fireEvent.click(addBtns[0]);

        const addQtyBtns = screen.getAllByRole('button', {name: '+'});
        //console.log(addQtyBtns.length);
        fireEvent.click(addQtyBtns[0]);
        expect(screen.getByText('2')).toBeInTheDocument();

        const removeQtyBtns = screen.getAllByRole('button', {name: '-'});
        fireEvent.click(removeQtyBtns[0]);
        expect(screen.getByText('1')).toBeInTheDocument();
        fireEvent.click(removeQtyBtns[0]);
        fireEvent.click(removeQtyBtns[0]);
        expect(screen.getByText('0')).toBeInTheDocument();

    });

    
    

})