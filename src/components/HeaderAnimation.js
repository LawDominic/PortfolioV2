import HeaderAnimationCSS from "./HeaderAnimation.css";

function HeaderAnimation() {
    return (
        <div id="header-content" class="container sm:mx-auto break-words w-screen mt-64 md:text-sm md:mt-0 lg:text-lg">
            <p>
                My name is <span class="highlight">Dominic Law</span>.<br />
            </p>
            <p>
                I am currently in my{" "}
                <span class="highlight">final year</span> at Macquarie University
                <br />
            </p>
            <p>
                actively pursuing a career in the{" "}
                <span class="highlight">Software Development</span>
                <br />
            </p>
            <p>landscape and aiming to perfect my craft.</p>
        </div>
    );
}

export default HeaderAnimation;
