import React from 'react'


function PageNine() {
    return (
        <div>
            <div>
                <div
                    style={{
                        backgroundColor: "white",
                        textAlign: "center",
                margin: "20% 35% 25% 35%",
                padding: "2%",
                borderRadius: "15px",
                boxShadow: "3px 3px 5px 1px rgb(139, 136, 136)"}}
      >
                <h1 style={{ fontSize: "20px", paddingTop: "20%" }}>
                    You have succesfully submitted <br />your application
                </h1>
                <div style={{ paddingTop: "15%" }}>
                    <button
                        className="btn btn-success"
                        style={{ padding: "3% 6% 3% 6%", backgroundColor: "rgb(0, 87, 0)" }}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    </div >
  )
}

export default PageNine