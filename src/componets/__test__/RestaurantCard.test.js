import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import MOCK_DATA from '../../mocks/RestCard.json';
import { render,screen } from '@testing-library/react';
import RestaurantCard, { WithPromtedRestaurantCard } from '../RestaurantCard';


describe('Test cases for RestaurantCard componet', () =>{

    test('Should run RestaurantCard component', () =>{

        render(<RestaurantCard  resData={MOCK_DATA}/>)

        const name = screen.getByText('Pizza Hut');

        expect(name).toBeInTheDocument();

    });

    test('shpuld render restaurant card with label', () =>{
        const RestaurantCardWithLabel = WithPromtedRestaurantCard(RestaurantCard);
        render(<RestaurantCardWithLabel resData={MOCK_DATA} />)

        const name2 = screen.getByText('Top Class');

        expect(name2).toBeInTheDocument();
    })
})