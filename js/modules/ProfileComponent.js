export default {
    template: `
    <section id="profile">
        <div>
            <div class="profileTop1" id="proflieSettings">
                <img alt="img"></img>
                <h2>Username</h2>
                <button type="button" class="profileSettingsBtn">Settings</button>
                <router-link to="/">Edit Profile</router-link>
            </div>
            <div class="profileTop2" id="profileInfo"></div>
            <aside class="profileTop3" id="profileStats"></aside>
        </div>
    </section>
    `
}