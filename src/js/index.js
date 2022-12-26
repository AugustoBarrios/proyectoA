import { contentId, username, password }  from "./dom.js";
import { fs } from "fs"

const URL = `../json/usersInfo.json`

const html = `<div class="box">
<div class="form">
    <h2>Sign in</h2>
    <div class="inputBox">
        <input type="text" required="required" id="username">
        <span>Username</span>
        <i></i>
    </div>
    <div class="inputBox">
        <input type="password" required="required" id="password">
        <span>Password</span>
        <i></i>
    </div>
    <div class="links">
        <a href="#">Forgot Password</a>
        <a href="#">Signup</a>
    </div>
    <input type="submit" value="Login">
</div>
</div>`;

contentId.innerHTML = html; 

