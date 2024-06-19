const Create = () => {
    return (  

        <div className="create">

            <h2> Add a new Blog</h2>
            <form>

                <label> Blog Title</label>
                <input type="text"
                required>

                </input>
                <label> Blog Body</label>
                <textarea required></textarea>

                <label> Blog Author</label>
                <select>
                    <option value="mario">mario

                    </option>
                    <option value="yoshi">mario

</option>
                    </select>
                

        
            </form>
        </div>
    );
}
 
export default  Create;