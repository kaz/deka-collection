import styled from "@emotion/styled";
import React from "react";
import { HashRouter, Link as _Link, Route, Switch } from "react-router-dom";
import { Boundary } from "react-suspense-boundary";
import Spinner from "../components/Spinner";
import _ThemeSwitch from "../components/ThemeSwitch";
import * as mixins from "../styles/mixins";
import Collection from "./Collection";
import NewAccount from "./NewAccount";
import ReplyList from "./ReplyList";

const Container = styled.div(mixins.transition(), {
	backgroundColor: mixins.theme.backgroundColor,
	color: mixins.theme.textColor,

	minHeight: "100vh",
});
const Header = styled.header(mixins.transition(), {
	display: "flex",
	padding: "1rem 3rem",

	borderBottom: mixins.border,
	backgroundColor: mixins.theme.backgroundColor,

	width: "100vw",
	minWidth: "560px",

	position: "fixed",
	top: "0",
	left: "0",

	userSelect: "none",
});
const Logo = styled.h1(mixins.logoText, mixins.logoStyle, {
	fontSize: "1.5rem",
	margin: "0 2em 0 0",
});
const Link = styled(_Link)(mixins.button, {
	display: "block",
	margin: "0 0.5em",
	padding: "0.4em 1.4em",
	borderRadius: "0.2em",
	textDecoration: "none",
});
const ThemeSwitch = styled(_ThemeSwitch)({
	alignSelf: "center",
	marginLeft: "auto",
});
const Main = styled.main({
	padding: "7rem 3rem 0 3rem",
});
const Footer = styled.footer({
	padding: "1rem 2rem",
	textAlign: "right",
	fontSize: "0.8em",
	color: mixins.theme.subtextColor,
});
const FootLink = styled.a({
	color: mixins.theme.secondaryColor,
});

const Component = () => {
	return (
		<Container>
			<HashRouter>
				<Header>
					<Logo>DEKA COLLECTION</Logo>
					<Link to="/">コレクション</Link>
					<Link to="/new">追加</Link>
					<Link to="/replies">クソリプ集</Link>

					<ThemeSwitch />
				</Header>

				<Main>
					<Boundary pendingFallback={<Spinner />} onErrorCaught={err => alert(err.message)}>
						<Switch>
							<Route exact path="/">
								<Collection />
							</Route>
							<Route path="/new">
								<NewAccount />
							</Route>
							<Route path="/replies">
								<ReplyList />
							</Route>
						</Switch>
					</Boundary>
				</Main>
			</HashRouter>

			<Footer>
				Fork me on{" "}
				<FootLink target="_blank" href="https://github.com/sekai67/deka-collection">
					GitHub
				</FootLink>
				<br />
				Created with 🧡 by{" "}
				<FootLink target="_blank" href="https://github.com/deka0106">
					@deka0106
				</FootLink>
			</Footer>
		</Container>
	);
};
export default Component;
