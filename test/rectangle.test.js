//Test returns Rectangle Perimeter
import {getRectanglePerimeter} from '../js/rectangle.js'

test('returns Rectangle Perimeter', ()=>
{
    expect(getRectanglePerimeter(10, 10)).toBe(40);

})

//Test returns Rectangle Area
import {getRectangleArea} from '../js/rectangle.js'

test('returns Rectangle Area', ()=>
{
    expect(getRectangleArea(10, 10)).toBe(100);

})

//Test returns Rectangle Info
import {getRectangleInfo} from '../js/rectangle.js'

test('returns Rectangle Info', ()=>
{
    expect(getRectanglePerimeter(10, 10)).toBe(40);
    expect(getRectangleArea(10, 10)).toBe(100);

})