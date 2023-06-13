import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import './Register.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
export default function Register() {
    const {
        RegisterSubmit,
        focusRegisterEmail,
        focusRegisterPassWord,
        focusRegisterUserName,
        inputRegisterEmailRef,
        inputRegisterPassWordRef,
        inputRegisterUserNameRef,
        onChangeRegisterEmail,
        onChangeRegisterUserName,
        onChangeRegisterPassword,
        registerEmail,
        registerPassword,
        registerUser,setShow } = useContext(AppContext)
        useEffect(()=>{
            setShow(false)
        })
    return (
        <form onSubmit={RegisterSubmit}>
            <div className="register">
                <div className='handle_register'>
                    <h1 style={{ marginTop: '20px', textAlign: 'center', marginBottom: '20px' }}>Create an account</h1>
                    <div className='handle_emailpassword'>
                        <div className='handle_input'>
                            <FaUserAlt onClick={() => focusRegisterUserName()} className='register_icon' /><input
                                onChange={onChangeRegisterUserName}
                                value={registerUser}
                                ref={inputRegisterUserNameRef}
                                type='text'
                                placeholder='Name'>

                            </input>
                        </div>
                        <div style={{ marginTop: '20px', marginBottom: '20px' }} className='handle_input'>
                            <MdEmail onClick={() => focusRegisterEmail()} className='register_icon' />
                            <input
                                onChange={onChangeRegisterEmail}
                                ref={inputRegisterEmailRef}
                                value={registerEmail}
                                type="email"
                                placeholder="Email"
                                required="required">
                            </input>
                        </div>
                        <div className='handle_input'>
                            <AiFillLock onClick={() => focusRegisterPassWord()} className='register_icon' />
                            <input
                                onChange={onChangeRegisterPassword}
                                value={registerPassword}
                                ref={inputRegisterPassWordRef}
                                type="password"
                                placeholder="Password">
                            </input>
                        </div>

                        <div style={{ marginTop: '10px', marginRight: '50px', textAlign: 'end' }}>
                            <Link to={`/user`} style={{ textDecoration: 'underline' }}>Sign In</Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                            <div className='handle_submit'>
                                <button onClick={RegisterSubmit} type='submit'>Submit</button>
                                <div className='handle_red'>
                                    <p className='handle_rotatecolor' style={{ background: 'blue' }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}