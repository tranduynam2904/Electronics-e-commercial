import { createContext } from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useRef } from "react"
import swal from 'sweetalert';
import { useInView } from 'react-intersection-observer';
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [hover, setHover] = useState([])
    const [nav, setNav] = useState(true)
    const [show, setShow] = useState(true)
    const [focus, setFocus] = useState([])
    const inputEmailRef = useRef(null);
    const inputPassWordRef = useRef(null)
    const inputRegisterEmailRef = useRef(null);
    const inputRegisterPassWordRef = useRef(null)
    const inputRegisterUserNameRef = useRef(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerUser, setRegisterUser] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [showButton, setShowButton] = useState(true)
    const [navmenu, setNavmenu] = useState(false)
    const [categories, setCategories] = useState(true)
    const [animate,setAnimate] = useState(false)

    const getData = async () => {
        const url = `https://64563f7c2e41ccf16917a1e4.mockapi.io/LaptopList`
        axios
            .get(url).then((res) => setProduct(res.data))
    }
    console.log(product)
    useEffect(() => {
        if (localStorage.getItem('cart_list')) {
            setCart(JSON.parse(localStorage.getItem('cart_list')));
        }
    }, [])
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {

    }, [cart])

    const addCart = (id) => {
        let kq = product.find((item) => item.id == id);
        const index = cart.findIndex((item) => item.id == id);
        if (index >= 0) {
            let newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
            localStorage.setItem('cart_list', JSON.stringify(newList));
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }]);
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]));
        }
    }
    console.log(cart)
    const plus = (id) => {
        const kq = cart.map((item) => item.id == id ? { ...item, qty: item.qty + 1 } : item)
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq));
    }
    const minus = (id) => {
        const kq = cart.map((item) => item.id == id ? { ...item, qty: item.qty - 1 } : item)
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq));
    }
    const removeItem = (id) => {
        const kq = cart.filter(item => item.id != id)
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq));
    }
    const hidesidebar = () => {
        setShow(false)
    }
    const showsidebar = () => {
        setShow(true)
        if (window.innerWidth <= 600) {
            setShow(false)
        }
    }

    const focusEmail = () => {
        inputEmailRef.current.focus();
    }
    const focusPassWord = () => {
        inputPassWordRef.current.focus();
    }
    const focusRegisterEmail = () => {
        inputRegisterEmailRef.current.focus();
    }
    const focusRegisterPassWord = () => {
        inputRegisterPassWordRef.current.focus();
    }
    const focusRegisterUserName = () => {
        inputRegisterUserNameRef.current.focus();
    }
    const onChangeRegisterUserName = (e) => {
        setRegisterUser(e.target.value)
    }
    const onChangeRegisterEmail = (e) => {
        setRegisterEmail(e.target.value)
    }
    const onChangeRegisterPassword = (e) => {
        setRegisterPassword(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(registerEmail);
    }
    const validateUserName = (registerUser) => {
        if (registerUser < 3) {
            return alert('User Must Have At Least 3 Letter')
        }
        // Check Special Letter
        const regex = /^[a-zA-Z0-9._-]+$/;
        if (!regex.test(registerUser)) {
            return '';
        }

        // Check Dulicate
        const existingUsernames = ['user1', 'user2', 'user3']; // List UserName That Existed
        if (existingUsernames.includes(registerUser)) {
            return 'User Name Existed';
        }
        //  If All The Request is done, return Null to point out the poperly UserName 
        return swal({
            title: "Register Successfully!",
            icon: "success",
            button: "OK!",
        });
    }

    const RegisterSubmit = (e) => {
        e.preventDefault();
        const JsonEmail = JSON.stringify(registerEmail)
        const JsonPassword = JSON.stringify(registerPassword)
        localStorage.setItem('inputRegisterUser', registerUser)
        localStorage.setItem('inputRegisterEmail', JsonEmail)
        localStorage.setItem('inputRegisterPassword', JsonPassword)
        if (validateEmail(registerEmail)) {
            setRegisterEmail('')
        }

        else {
            alert('Please Register Right Email Address')
        }
        setRegisterUser(validateUserName)
        setRegisterUser('')
        setRegisterPassword('')

    }
    const submit = (e) => {
        e.preventDefault();
        const SignInEmail = JSON.stringify(email)
        const SignInPassword = JSON.stringify(password)
        if (email == '') {
            return alert('Please Write Your Email Register')
        }
        if (password == '') {
            return alert('Please Write Password Of Your Email Register')
        }
        if (SignInEmail == localStorage.getItem('inputRegisterEmail', registerEmail) &&
            SignInPassword == localStorage.getItem('inputRegisterPassword', registerPassword)) {
            return swal("Sign In Successful!", "Welcome!" + " " + localStorage.getItem('inputRegisterUser', registerUser), "success");
        }
        else {
            return alert('Wrong Email or Password')
        }

    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const AnimateScroll =() =>{
const [ref,inView] = useInView({
    threshold: 0.5, // Trigger animation when element is 50% visible
    triggerOnce: true // Only trigger animation once
})
    }
    return (
        <AppContext.Provider value={{
            RegisterSubmit, focusRegisterEmail, focusRegisterPassWord, focusRegisterUserName, inputRegisterEmailRef
            , inputRegisterPassWordRef, inputRegisterUserNameRef, registerEmail, registerPassword, registerUser,
            onChangeRegisterEmail, onChangeRegisterUserName, onChangeRegisterPassword,

            onChangeEmail, onChangePassword, email, password, submit, focusPassWord, inputPassWordRef,
            focusEmail, inputEmailRef,

            showsidebar, hidesidebar, show, setShow, setNav, nav,

            removeItem, setProduct, product, addCart, cart, plus, minus,

            ScrollToTop, showButton, setShowButton,

            navmenu, setNavmenu,
            categories, setCategories
        }}>
            {children}
        </AppContext.Provider>
    )
}

