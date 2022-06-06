import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center mx-auto sm:px-3 lg:px-6 text-gray-800 mb-32'>
            <div className='shadow-xl hover:shadow-2xl flex flex-col items-center rounded-xl px-8 pt-2 pb-10'>
                <div className='w-full px-4 font-thin'>
                    <h2 className='text-2xl font-semibold mt-4 text-center underline'>Questions:</h2>
                    <div className='grid xl:grid-cols-2 gap-10'>
                        <div>
                            <div>
                                <h3 className='mt-4 capitalize font-semibold'> 1. How will you improve the performance of a React Application?</h3>
                                <h4 className='mt-1'> <span className="font-semibold"> Answer: </span>
                                    <ul>
                                        <li>1. By using component state same file where it declared.</li>
                                        <li>2. By Giving correct dependency to useEffect to prevent unnecessary re-renders.</li>
                                        <li>3. By using customs hooks to split code and use the code multiple time by importing</li>
                                        <li>4. By not passing necessary props</li>
                                        <li>5. By using asynchronous function to keep processing other task before the data received</li>
                                    </ul>
                                </h4>
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold'> 2. What are the different ways to manage a state in a React application?</h3>
                                <h4 className='mt-1'> <span className="font-semibold">Answer: </span>
                                    <ul>
                                        <li>1. Firstly, We need to import useState</li>
                                        <li>2. Then we need to call the usestate by giving initial value</li>
                                        <li>3. Then we need to destructure useState using array destructure</li>
                                        <li>4. The first index of useState we get data</li>
                                        <li>5. The second index of useState we get a function to set data</li>
                                        <li>6. If a data is dynamically changing, we should pass the data at useState's function</li>
                                        <li>7. When data passed to useState's function, it shows the changes to the website for the data</li>
                                    </ul>
                                </h4>
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold'>3. How does prototypical inheritance work in JavaScript?</h3>
                                <h4 className='mt-1'> <span className="font-semibold">Answer: </span>
                                    <ul>
                                        <li>1. Prototype Inheritance is a behavior of JavaScript to add methods and features to objects.</li>
                                        <li>2. It used to access object properties from another object.</li>
                                        <li>3. It add new properties and methods to an existing object constructor.</li>
                                        <li>4. Prototypical inheritance in JavaScript recycles existing objects and serve as a prototype</li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className='mt-4 font-semibold'>4. Why you do not set the state directly in React.For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h3>
                                <h4 className='mt-1'> <span className="font-semibold">Answer: </span>
                                    <ul>
                                        Firebase provides hosted backend services such as:
                                        <li>1. UseState shows the changes to the website for a data if usestate's function called.</li>
                                        <li>2. Where if we change the data directly, it will not appear or show the changes at website.</li>
                                        <li>3. when usestate's function called it find if the data is change or not.</li>
                                        <li>4. If the data is changed then it give the data also modify the website are where data is using</li>
                                        <li>5. simply, if we change the data directly, it will not show any change at website</li>
                                    </ul>
                                </h4>
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                                <h4 className='mt-1'>
                                    <span className="font-semibold">Answer: </span>
                                    <ul>
                                        <div className='text-sm'>
                                            <code> {`const products = [ `} </code>
                                            <br />
                                            <code> {`{name: "pen", price: 10, description: "red"},`} </code>
                                            <br />
                                            <code> {`{name: "pencil", price: 15, description: "yellow"},`} </code>
                                            <br />
                                            <code> {`{name: "book", price: 100, description: "colored"},`} </code>
                                            <br />
                                            <code> {`{name: "bag", price: 200, description: "blue"},`} </code>
                                            <br />
                                            <code> {`{name: "table", price: 300, description: "wood"}, `} </code>
                                            <br />
                                            <code> {`{name: "chair", price: 150, description: "plastic"}`} </code>
                                            <br />
                                            <code> {`];`} </code>
                                            <br />
                                            <code> {` const searchItem= "Pen";`}
                                            </code>
                                            <br />
                                            <code> {`const pens=products.filter(p=>p.name.toLowerCase().includes(searchItem.toLowerCase()));`}
                                            </code>
                                        </div>
                                    </ul>
                                </h4>
                            </div>
                            <div>
                                <h3 className='mt-4 font-semibold'>6. What is a unit test? Why should write unit tests?</h3>
                                <h4 className='mt-1'>
                                    <span className='font-semibold'>Answer: </span>
                                    <ul>
                                        Unit tests are typically automated tests written and run by software developers to ensure that part of any application matches the design and behaves accordingly. It is a software development process where the smallest testable part of an application, called a unit, is verified individually and independently for proper operation. This testing method is used by software developers during the development process.
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;