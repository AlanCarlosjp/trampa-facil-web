import React from "react";
import './styles.scss';


const Blog = () => {
    return (
        <>
           <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center my-5">My Blog</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-8 offset-2">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Enter title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" rows={3}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}

export default Blog;