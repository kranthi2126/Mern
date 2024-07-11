// import react from 'react'
// import {render, fireEvent} from '@testing-library/react';
// import '@testing-library/jest-dom'
// import button from './button';
// import Button from './button';

// test('Rendr button with Label',()=>{
//     const {getByText}= render(<Button label="Click me"/>)
//     const buttonElement = getByText('Click me');
//     expect(buttonElement).toBeInTheDocument();
// });

// //className=btn
// test('ClassName btn present', ()=>{
//     const {container}=render(<Button label="Click me"/>
//     )
//     const buttonElement =container.querySelector('button');
//     expect (buttonElement).toHaveClass('btn');

// })
const mockFun = jest.fn();
test('fun',()=>{
    mockFun();
    mockFun();
    expect(mockFun).toHaveBeenCalledTimes(2);
})