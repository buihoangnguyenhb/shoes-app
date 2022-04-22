import React from 'react';
import styled from 'styled-components/macro';

function Home(props) {
    return (
        <Wrapper>
            <header>♥ Chào mừng bạn đến với SHOES ♥</header>
            <section>
                <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/e0e17e64-5a2b-400d-b724-f314b13263f5/men-s-shoes-clothing-accessories.jpg' alt='nike err' />

                    <div>
                    <h2>SHOES NÂNG NIU BÀN CHÂN VIỆT</h2>
                    </div>
            </section>
            <div>
            </div>
        </Wrapper>
    );
}

export default Home;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    header {
        margin-bottom: 25px;
    }
    h2 {
        color: #fff;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
    }
`;