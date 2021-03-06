import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "three-dots";
import * as mixins from "../styles/mixins";

const colorOverride = css({
	color: mixins.theme.primaryColor,
	backgroundColor: mixins.theme.primaryColor,
});
const Spinner = styled.div(colorOverride, {
	margin: "1em",
	"&::before": colorOverride,
	"&::after": colorOverride,
});

const Component = () => {
	return <Spinner className="dot-windmill" />;
};
export default Component;
