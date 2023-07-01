import { createContext } from "react"
import { useState, useEffect } from "react"
import { useRef } from "react"
import { filter, includes } from 'lodash'
import swal from 'sweetalert';
import 'react-toastify/dist/ReactToastify.css';
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [product, setProduct] = useState([
        {
            id1: '1',
            image: 'https://product.hstatic.net/200000420363/product/laptop-acer-nitro-5-an515-45-r6ev_384a4f04a02f4269afdc5462b3c66708_master.png',
            name: 'LAPTOP ACER NITRO 5 EAGLE AN515-57-54MV',
            qty: 1,
            originalprice: 849.55,
            price: 849.55
        },
        {
            id1: '2',
            image: 'https://product.hstatic.net/200000420363/product/laptop-asus-tuf-gaming-f15-fx506hc-hn144w-_ed2bb13600b34923810d060c6399bae0_master.jpg',
            name: 'Laptop ASUS TUF Gaming F15 FX506HC HN144W',
            qty: 1,
            originalprice: 807.05,
            price: 807.05
        },
        {
            id1: '3',
            image: 'https://product.hstatic.net/200000420363/product/laptop-lenovo-300e-chromebook_72c471d0721f4b2dbb2a0178cdda801a_master.jpg',
            name: 'LAPTOP LENOVO 300E CHROMEBOOK',
            qty: 1,
            originalprice: 88.82,
            price: 88.82
        },
        {
            id1: '4',
            image: 'https://product.hstatic.net/200000420363/product/laptop-fujitsu-lifebook-e5410_026baa2daf474dc4bf1f0965d0b95ed5_master.jpg',
            name: 'LAPTOP FUJITSU LIFEBOOK E4510',
            qty: 1,
            originalprice: 297.07,
            price: 297.07
        },
        {
            id1: '5',
            image: 'https://product.hstatic.net/200000420363/product/laptop-lenovo-300e-chromebook_72c471d0721f4b2dbb2a0178cdda801a_master.jpg',
            name: 'Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B',
            qty: 1,
            originalprice: 403.31,
            price: 403.31
        },
    ]
    )
    const [latestProduct, setLatestProduct] = useState([
        {
            id: '1',
            image: 'https://product.hstatic.net/200000420363/product/laptop-asus-gaming-tuf-dash-fx517zc-hn077w-_4b32e6259fe2459cba67735f224ac4fd_master.jpg',
            name: 'ASUS TUF DASH F15 FX517ZC- HN077W',
            qty: 1,
            originalprice: 883.55,
            price: 883.55
        },
        {
            id: '2',
            image: 'https://product.hstatic.net/200000420363/product/2_b12d2901df664cdaa30c3602da0c0c2f_master.jpg',
            name: 'Gaming Asus ROG Strix G16 G614JU N3135W',
            qty: 1,
            originalprice: 1516.79,
            price: 1516.79

        },
        {
            id: '3',
            image: 'https://product.hstatic.net/200000420363/product/laptop-gaming-gigabyte-g5-ge_cef34f7b9432438e91cac1c4d94430b6_master.png',
            name: 'Gaming GIGABYTE G5 ME 51VN263SH',
            qty: 1,
            originalprice: 913.30,
            price: 913.30

        },
        {
            id: '4',
            image: 'https://product.hstatic.net/200000420363/product/laptop-asus-expertbook-b1400ceae--bv3186w_d18f2cf629e54c48b33103105e91105e_master.jpg',
            name: 'ASUS ExpertBook B1400CEAE-BV3186W',
            qty: 1,
            originalprice: 382.07,
            price: 382.07
        },
        {
            id: '5',
            image: 'https://product.hstatic.net/200000420363/product/laptop-asus-vivobook-15x-oled-a1503za-l1422w_7d84c75da414458091f257835d17f9f5_master.png',
            name: 'ASUS VIVOBOOK 15X OLED A1503ZA L1422W',
            qty: 1,
            originalprice: 722.06,
            price: 722.06
        },
        {
            id: '6',
            image: 'https://product.hstatic.net/200000420363/product/1_7787bd0239884d62aee2d701d9ab5ccb_master.jpg',
            name: 'DELL VOSTRO 15 3520 5M2TT2 (GREY)',
            qty: 1,
            originalprice: 700.81,
            price: 700.81
        },
        {
            id: '7',
            image: 'https://product.hstatic.net/200000420363/product/1_a4602b98289e4c4cb85f0c02a363446c_master.jpg',
            name: 'LG Gram Style 2023 14Z90RS G.AH54A5',
            qty: 1,
            originalprice: 1657.03,
            price: 1657.03
        },
        {
            id: '8',
            image: 'https://product.hstatic.net/200000420363/product/laptop-dell-inspiron-15-3520-i3u082w11blu_9e3468b8ccb6496593db164061932dab_master.png',
            name: 'Dell Inspiron 15 3520 i3U082W11BLU ',
            qty: 1,
            originalprice: 522.31,
            price: 522.31
        },
        {
            id: '9',
            image: 'https://product.hstatic.net/200000420363/product/laptop-hp-envy-x360-13-bf0090tu_580327bebdf040d48e8455b327547258_master.png',
            name: 'HP Envy X360 13 bf0090TU 76B13PA',
            qty: 1,
            originalprice: 1189.54,
            price: 1189.54,
        },
    ])
    const [cart, setCart] = useState([])
    const [cartLatestProduct, setCartLatestProduct] = useState([])
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
    const [bestselling, setBestselling] = useState(true)
    const [user, setUser] = useState(false)
    const [client, setClient] = useState(true)
    const [totalprice, setTotalPrice] = useState("")
    const [productDetail, setProductDetail] = useState([])
    const selectedProduct = (id) => {
        const Detail = product.map((item) => {
            if (item.id1 == id) {
                return { ...item, qty: item.qty, image: item.image }
            }
            setProductDetail(Detail)
        })
    }
    useEffect(() => {
        if (localStorage.getItem('cart_list')) {
            setCart(JSON.parse(localStorage.getItem('cart_list')));
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem('cart_list_latest_product')) {
            setCartLatestProduct(JSON.parse(localStorage.getItem('cart_list_latest_product')));
        }
    }, [])
    useEffect(() => {

    }, [cart])
    useEffect(() => {

    }, [cartLatestProduct])

    let productList = ''
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        productList += `(Name: ${item.name}\n - Price: $${item.originalprice}\n - Quantity: ${item.qty}\n - Total: $${item.price}), \n`;
    }
    for (let i = 0; i < cartLatestProduct.length; i++) {
        const item = cartLatestProduct[i];
        productList += `(Name: ${item.name}\n - Price: $${item.originalprice}\n - Quantity: ${item.qty}\n - Total: $${item.price}), \n`;
    }



    const [sortOrder, setSortOrder] = useState([]);
    const handleSortOrderChange = (e) => {
        const selectedValue = e.target.value;
        setSortOrder(selectedValue);
        let sortedProducts = [];

        if (selectedValue === "AZ") {
            sortedProducts = [...latestProduct].sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (selectedValue === "ZA") {
            sortedProducts = [...latestProduct].sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        } else if (selectedValue === "asc") {
            sortedProducts = [...latestProduct].sort((a, b) => a.price - b.price);
        } else if (selectedValue === "desc") {
            sortedProducts = [...latestProduct].sort((a, b) => b.price - a.price);
        } else {
            sortedProducts = latestProduct;
        }
        setLatestProduct(sortedProducts);
    };
    const addCart = (id) => {
        let kq = product.find((item) => item.id1 == id);
        const index = cart.findIndex((item) => item.id1 == id);
        if (index >= 0) {
            const newList = cart.map((item) => {
                if (item.id1 === id) {
                    const newQty = item.qty + 1;
                    const newPrice = item.price / item.qty * newQty;
                    return { ...item, qty: newQty, price: newPrice.toFixed(2) }
                }
                else {
                    return item;
                }
            })
            setCart(newList);
            localStorage.setItem('cart_list', JSON.stringify(newList));
        }
        else {
            setCart([...cart, { ...kq }]);
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]));
        }

        swal("Completed!", "Add To Cart!", "success");

    }

    const addCartLatestProduct = (id) => {
        let kq = latestProduct.find((item) => item.id == id);
        const index = cartLatestProduct.findIndex((item) => item.id == id);
        if (index >= 0) {
            const newList = cartLatestProduct.map((item) => {
                if (item.id === id) {
                    const newQty = item.qty + 1
                    const newPrice = item.price / item.qty * newQty
                    return { ...item, qty: newQty, price: newPrice.toFixed(2) }
                }
                else {
                    return item;
                }
            })
            setCartLatestProduct(newList);
            localStorage.setItem('cart_list_latest_product', JSON.stringify(newList));
        }
        else {
            setCartLatestProduct([...cartLatestProduct, { ...kq }]);
            localStorage.setItem('cart_list_latest_product', JSON.stringify([...cartLatestProduct, { ...kq, qty: 1 }]));
        }

        swal("Completed!", "Add To Cart!", "success");
    }
    const total = cart.reduce((total, item) => {
        return (parseFloat(total) + parseFloat(item.price)).toFixed(2);
    }, 0)
    const totallatest = cartLatestProduct.reduce((total, item) => {
        return (parseFloat(total) + parseFloat(item.price)).toFixed(2);
    }, 0)
    const totalall = (parseFloat(total) + parseFloat(totallatest)).toFixed(2);
    const totalItem = cart.reduce((total, item) => {
        return (parseFloat(total) + parseFloat(item.qty));
    }, 0)
    const totalItemLatest = cartLatestProduct.reduce((total, item) => {
        return (parseFloat(total) + parseFloat(item.qty));
    }, 0)
    const totalItemAll = (parseFloat(totalItem) + parseFloat(totalItemLatest));

    const plus = (id) => {
        const kq = cart.map((item) => {
            if (item.id1 === id) {
                const newQty = item.qty + 1
                const newPrice = item.price / item.qty * newQty
                return { ...item, qty: newQty, price: newPrice.toFixed(2) }
            }
            else {
                return item;
            }
        })
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq));

    }
    const minus = (id) => {
        const kq = cart.map((item) => {
            if (item.id1 === id) {
                let newQty = item.qty - 1
                if (newQty == 0) {
                    newQty = 1;
                }
                const newPrice = item.price / item.qty * newQty
                return { ...item, qty: newQty, price: newPrice.toFixed(2) }
            }
            else {
                return item;
            }
        })
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq));
    }
    const plusLatestProduct = (id) => {
        const kq = cartLatestProduct.map((item) => {
            if (item.id === id) {
                const newQty = item.qty + 1
                const newPrice = item.price / item.qty * newQty
                return { ...item, qty: newQty, price: newPrice.toFixed(2) }
            }
            else {
                return item;
            }

        })
        setCartLatestProduct(kq);
        localStorage.setItem('cart_list_latest_product', JSON.stringify(kq));
    }
    const minusLatestProduct = (id) => {
        const kq = cartLatestProduct.map((item) => {
            if (item.id === id) {
                let newQty = item.qty - 1
                if (newQty == 0) {
                    newQty = 1;
                }
                const newPrice = item.price / item.qty * newQty
                return { ...item, qty: newQty == 0 ? 1 : newQty, price: newPrice.toFixed(2) }
            }
            else {
                return item;
            }

        })
        setCartLatestProduct(kq);
        localStorage.setItem('cart_list_latest_product', JSON.stringify(kq));
    }
    const removeItem = (id) => {
        const kq1 = cart.filter(item => item.id1 != id)
        setCart(kq1)
        localStorage.setItem('cart_list', JSON.stringify(kq1));

    }
    const removeItemLatestProduct = (id) => {
        const kq = cartLatestProduct.filter(item => item.id != id)
        setCartLatestProduct(kq)
        localStorage.setItem('cart_list_latest_product', JSON.stringify(kq));
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
    const showsidebar_dropdown = () => {
        setShow(true)
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
        if (registerUser.length < 3) {
            return alert('User Must Have At Least 3 Letter')
        }
        // Check Special Letter
        const regex = /^[a-zA-Z0-9._-]+$/;
        if (!regex.test(registerUser)) {
            return '';
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

    const handle_tabmenu = () => {
        setShow(true)
    }
    const handle_tabmenu_show = () => {
        setUser(true)
    }
    const [contactName, setContactName] = useState("")
    const [nameError, setNameError] = useState('');
    const [contactEmail, setContactEmail] = useState("")
    const onChangeContactEmail = (e) => {
        setContactEmail(e.target.value)
    }
    const onChangeContactName = (e) => {
        setContactName(e.target.value)
    }
    
    const validateContactUserName = (username) => {
        if (!username) {
            return alert('Username is required');
        }

        if (username.length < 3) {
            return alert('Username must be at least 3 characters long');
        }

        const regex = /^[a-zA-Z0-9._-]+$/;
        if (!regex.test(username)) {
            return alert('Username can only contain letters, numbers, and special characters . _ -');
        }
        // else {
        //     return '';
        // }
    };
    const validateProceedUserName = (username) => {
        if (!username) {
            return alert('Username is required');
        }

        if (username.length < 3) {
            return alert('Username must be at least 3 characters long');
        }

        const regex = /^[a-zA-Z0-9._-]+$/;
        if (!regex.test(username)) {
            return alert('Username can only contain letters, numbers, and special characters . _ -');
        }
        // else {
        //     return '';
        // }
    };
    const validateContactEmail = (email) => {
        if (!email) {
            return alert('Email is required');
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return alert('Invalid email address');
        }
        else {
            swal("Thank You For Your Information!", "We will contact to you soon!", "success")
            // return '';
        }
    };

    const validateProceedEmail = (email) => {
        if (!email) {
            return alert('Email is required');
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return alert('Invalid email address');
        }
        else {
            swal("Thank You For Your Purchase!", "We will ship to your address soon!", "success");
            // return '';
        }
    };
    const [phone, setPhone] = useState("")
    const validateProceedPhone = (phone) => {
        const regex = /^\d{10}$/;
        if (!regex.test(phone)) {
            return alert('Invalid phone number');
        }
        // else {
        //     return '';
        // }
    }
    const onChangeProceedPhone = (e) => {
        setPhone(e.target.value)
    }
    const SubmitContact = () => {
        setContactEmail(validateContactEmail)
        setContactName(validateContactUserName)
    }
    const [proceedName, setProceedName] = useState("")
    const [proceedEmail, setProceedEmail] = useState("")
    const onChangeProceedEmail = (e) => {
        setProceedEmail(e.target.value)
    }
    const onChangeProceedName = (e) => {
        setProceedName(e.target.value)
    }
    const SubmitProcess = () => {
        setProceedEmail(validateProceedEmail)
        setProceedName(validateProceedUserName)
        setPhone(validateProceedPhone)
    }
    const [SearchArea, setSearchArea] = useState('')
    const [SearchResultLatest, setSearchResultLatest] = useState([])
    const [SearchResult, setSearchResult] = useState([])
    const HandleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchArea(value)
        if (value === '') {
            setSearchResultLatest([])
            setSearchResult([])
        }
        else {
            const resultlatest = filter(latestProduct, (item) =>
                includes(item.name.toLowerCase(), SearchArea.toLowerCase()))
            const result = filter(product, (item) =>
                includes(item.name.toLowerCase(), SearchArea.toLowerCase()))
            setSearchResultLatest(resultlatest);
            setSearchResult(result)
        }
    }

    return (
        <AppContext.Provider value={{
            RegisterSubmit, focusRegisterEmail, focusRegisterPassWord, focusRegisterUserName, inputRegisterEmailRef
            , inputRegisterPassWordRef, inputRegisterUserNameRef, registerEmail, registerPassword, registerUser,
            onChangeRegisterEmail, onChangeRegisterUserName, onChangeRegisterPassword,

            addCartLatestProduct,

            onChangeEmail, onChangePassword, email, password, submit, focusPassWord, inputPassWordRef,
            focusEmail, inputEmailRef,

            showsidebar, hidesidebar, show, setShow, setNav, nav,

            removeItem, setProduct, latestProduct, product, addCart, cart, plus, minus,

            ScrollToTop, showButton, setShowButton,
            removeItemLatestProduct,
            plusLatestProduct,
            minusLatestProduct,
            user, setUser,
            cartLatestProduct, setCartLatestProduct,

            handle_tabmenu_show,

            handle_tabmenu,
            totalprice, setTotalPrice,
            navmenu, setNavmenu,
            categories, setCategories,
            bestselling, setBestselling,
            client, setClient,
            showsidebar_dropdown,
            total,
            totallatest,
            totalall,
            totalItemAll,
            // totalitemAll,
            sortOrder,
            // sortedProductsAsc,
            // sortedProductsDesc
            // handleSortPriceHighToLow
            handleSortOrderChange,
            // mailOptions
            productList,
            SubmitContact,
            SubmitProcess,
            contactName,
            contactEmail,
            // handleContactEmailChange,
            // isValidEmail
            onChangeContactEmail,
            onChangeContactName,
            productDetail,
            selectedProduct,
            setSearchArea,
            HandleSearch,
            SearchArea,
            SearchResultLatest,
            SearchResult,
            proceedName,
            proceedEmail,
            phone,
            onChangeProceedEmail,
            onChangeProceedName,
            onChangeProceedPhone,
        }
        }>
            {children}
        </AppContext.Provider >
    )
}

