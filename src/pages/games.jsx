import { useEffect, useState } from "react";
import Button from "../components/elements/Button";
import Description from "../components/elements/Description";
import Header from "../components/elements/Header";
import GameCards from "../components/fragments/GameCard";
import ToggleScrollX from "../components/fragments/ToggleScrollX";
import AuthLayout from "../components/layouts/AuthLayout";
import CardLayout from "../components/layouts/CardLayout";
import Navbar from "../components/layouts/Navbar";
import { NewGame } from "../hooks/newGame";
import { MostPlayedGame } from "../hooks/mostPlayedGame";
import { RatingGame } from "../hooks/ratingGame";
import GenreOption from "../components/fragments/Games/GenreOption";
import GenreGame from "../hooks/GenreGame";
// import { getNewGameList } from "../services/newgamelist.service";

const Games = () => {
  const dataNewGame = NewGame();
  const dataMostPlayed = MostPlayedGame();
  const dataByRating = RatingGame();
  const [genre, setGenre] = useState("");
  const genreGame = GenreGame(genre);

  console.log(genreGame);
  return (
    <>
      <Navbar />
      <AuthLayout background={"bg-dark"}>
        <div className="w-full px-5 py-5 lg:px-10 xl:px-14">
          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-5xl text-white text-center tracking-wider lg:text-7xl xl:text-9xl">
              Games
            </Header>
            <Description className="text-center lg:text-xl">
              Temukan game yang kamu cari disini!!
            </Description>
          </div>
          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-2xl text-white tracking-wider">
              New Games <span className="text-primary">Release</span>
            </Header>
            <hr />
            <CardLayout>
              {dataNewGame.length > 0 &&
                dataNewGame.map((game) => (
                  <GameCards key={game.id}>
                    <GameCards.CardImage
                      image={game.background_image}
                      titleImage={game.name}
                    />
                    <GameCards.CardFill
                      title={game.name}
                      date={game.released}
                      rating={game.rating}
                    />
                  </GameCards>
                ))}
            </CardLayout>
            <ToggleScrollX />
          </div>

          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-2xl text-white tracking-wider">
              Most <span className="text-primary">Played</span>
            </Header>
            <hr />
            <CardLayout>
              {dataMostPlayed.length > 0 &&
                dataMostPlayed.map((game) => (
                  <GameCards key={game.id}>
                    <GameCards.CardImage
                      image={game.background_image}
                      titleImage={game.name}
                    />
                    <GameCards.CardFill
                      title={game.name}
                      date={game.released}
                      rating={game.rating}
                    />
                  </GameCards>
                ))}
            </CardLayout>
            <ToggleScrollX />
          </div>

          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-2xl text-white tracking-wider">
              Best Rating <span className="text-primary">Games</span>
            </Header>
            <hr />
            <CardLayout>
              {dataByRating.length > 0 &&
                dataByRating.map((game) => (
                  <GameCards key={game.id}>
                    <GameCards.CardImage
                      image={game.background_image}
                      titleImage={game.name}
                    />
                    <GameCards.CardFill
                      title={game.name}
                      date={game.released}
                      rating={game.rating}
                    />
                  </GameCards>
                ))}
            </CardLayout>
            <ToggleScrollX />
          </div>

          <div className="w-full mb-10">
            <Header className="font-bebas-neue text-2xl text-white tracking-wider">
              By <span className="text-primary">Genre</span>
            </Header>
            <hr />
            <GenreOption genreGames={setGenre} />
            <CardLayout>
              {genre === ""
                ? dataNewGame.map((game) => (
                    <GameCards key={game.id}>
                      <GameCards.CardImage
                        image={game.background_image}
                        titleImage={game.name}
                      />
                      <GameCards.CardFill
                        title={game.name}
                        date={game.released}
                        rating={game.rating}
                      />
                    </GameCards>
                  ))
                : Array.isArray(genreGame) &&
                  genreGame.length > 0 &&
                  genreGame.map((game) => (
                    <GameCards key={game.id}>
                      <GameCards.CardImage
                        image={game.background_image}
                        titleImage={game.name}
                      />
                      <GameCards.CardFill
                        title={game.name}
                        date={game.released}
                        rating={game.rating}
                      />
                    </GameCards>
                  ))}
            </CardLayout>
            <ToggleScrollX />
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Games;
