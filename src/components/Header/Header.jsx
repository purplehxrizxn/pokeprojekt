import {
    Container, Search, OrderBy, Main 
}  from './styles'

export default function Header(props) {
    return (
        <Container>
            <h1>
                PokéProjekt
            </h1>

            <Search>
                <Main>
                    <span>Search for a Pokémon...</span>
                    <input type="text" placeholder="Blastoise, Umbreon, Lapras..." name="" id="" />
                </Main>

                <OrderBy>
                    <span>
                        or <span>Order By</span>:
                    </span>
                    <select name="" id="">
                        <option value="">Region</option>
                        <option value="">Type</option>
                        <option value="">Generation</option>
                    </select>
                </OrderBy>
            </Search>
        </Container>
    );
}