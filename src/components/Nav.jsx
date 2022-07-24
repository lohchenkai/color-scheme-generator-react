
export default function Nav(props){
    // destructuring props
    const {handleChange, handleSubmit, userInput} = props;

    return (
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="color" name="choosenColor" value={userInput.choosenColor} onChange={handleChange} className="form-color-input" />

                <select name="mode" onChange={handleChange} value={userInput.mode}  className="form-mode-input" >
                    <option value="monochrome">Monochrome</option>
                    <option value="monochrome-dark">Monochrome-dark</option>
                    <option value="monochrome-light">Monochrome-light</option>
                    <option value="analogic">Analogic</option>
                    <option value="complement">Complement</option>
                    <option value="analogic-complement">Analogic-complement</option>
                    <option value="triad">Triad</option>
                </select>

                <button type="submit" className="btn">Get color scheme</button>
            </form>
        </nav>
    )
}