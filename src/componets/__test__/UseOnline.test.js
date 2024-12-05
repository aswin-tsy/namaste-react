

import '@testing-library/jest-dom';
import { describe, expect } from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import useOnlineStatus from '../../utils/useOnlineStatus';

describe('Test cases for useOnline hook', () =>{

    test('should return false when wifi off', () =>{

        const {result} = renderHook(() =>{
           return useOnlineStatus();
        })

        act(() => window.dispatchEvent(new Event('offline')));

       // console.log(result)
        expect(result.current).toBeFalsy
    })
    test('should return true when wifi on', () =>{

        const { result } = renderHook(() => useOnlineStatus());

        act(() => window.dispatchEvent(new Event('online')));

       // console.log(result)
        expect(result.current).toBeTruthy()
    });
});