import chefClaudeLogo from "/src/images/chef_claude_logo.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chefLogo" />
            <h1>Chef Claude</h1>
        </header>
    )
}