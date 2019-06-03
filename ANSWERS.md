##What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to validate the data-types we receive in props. It's important to
check the data-types because if we receive a value in props that is of an unexpected
data-type than how we wrote our code to handle, it can have some unintended side-effects.

For example if we received a string in props where we were expecting a number, operations like '+' would change their meaning.

Ex.
("9" + 5) evaluates to "95", where
(9 + 5) evaluates to 14.

##Describe a life-cycle event in React?

A life-cycle event is a method you can use to update the UI and application state
during the life-cycle stages of a component: Mounting, Updating, and Unmounting. They are
accessable only by useing class components. (Though may be accessable using hooks, but we haven't
gotten to that section yet)

Mounting:

    constructor: receives in props passed down from the parent component, initializes a state object if
        the component requires it. Can be omitted depending on certian situations

    render: called each time a re-render is triggered by a state-change

    componentDidMount: called once only after a components initial mounting or rendering, can be used to update the state with data from an API

Updating:

    render: called each time a re-render is triggered by a state-change observed by the component

    componentDidUpdate: called after each re-render, but not after the first initial render

Unmounting:

    componentWillUnMount: called just before a component unmounts from the DOM. Can be used for clean-up.

##Explain the details of a Higher Order Component?

A higher order component is a function that takes one or more components that share
a similar functionality and returns a single component base on some condition.

Higher Order components use a technique called currying converts a function
with multiple parameters into a series of nested function calls that operate
on each parameter in a sequential order:

For example:

```
function add(a) {
    return function (b) {
        return a + b;
    }
}

add(3) // returns a function that takes an argument `b` to be used to add to the value of `a` stored in the returned functions closure

const add3 = add(3);
add3(4) // returns 7

add(3)(4) // immediately invokes the function returned by add(3), passing an argument of `4` to that function, yeilding 7 as the return value
```

A similar logic can be applied to a HOC:

```
const HOC = (Component_1) = (Component_2) => {
    // define state and/or methods that apply to either or both components

    return (
        // pass state and/or methods down to either both or one of components depending on differences/             similarities in functionality
        // return one component based on some condition dependent on the application state

        {
            (condition)
            ? <Component_1 property_1={this.state.property}... > // '...' denotes additional properties
            : <Component_2 property_2={this.state.property}... >
        }

    )
}

const A_Component = HOC(Component_1)(Component_2);

```

##What are three different ways to style components in React? Explain some of the benefits of each.

External css files, styled-components and third party css libraries.

Benefits:
External css files: All your CSS is house in one separate CSS file. This could be
one large CSS file that holds one, more, or all of your styles. The benefit of this
is maintaining a separation of concerns. You want your logic separate from your styles
so your code is cleaner, easier to read and easier to maintain.

Styled Components: All of your css is hard-coded into a styled element which you can
use to build your state without having to define any classNames. The benefit of this
is again cleaner code, but also a different type of concern separation where instead of
your styles being separated into a separate file, they're separated from your logic
within the same file. All concerns regarding a component as a result can be accessed,
modified and maintained within on central location. This allows again for cleaner,
more readable code, and an ease of locating styles that need to be updated without
sifting through a large code-base.

Third-party css libraries: Third-party libraries allow you to import customized styles
directly into your application. This takes the leg-work out of coming up with styles on
your own if you're either not a great designer, are short on time and need to meet
a deadline, or simply like the look and feel of a particul custom css library and want
to incorporate it into your project.
