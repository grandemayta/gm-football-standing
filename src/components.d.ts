/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GmFootballStandings {
        "competition": string;
        "publicKey": string;
        "season": number;
    }
    interface GmStandingHeader {
    }
    interface GmStandingRow {
        "draw": number;
        "goalDifference": number;
        "goalsAgainst": number;
        "goalsFor": number;
        "imageUrl": string;
        "lost": number;
        "name": string;
        "playedGames": number;
        "points": number;
        "position": number;
        "won": number;
    }
}
declare global {
    interface HTMLGmFootballStandingsElement extends Components.GmFootballStandings, HTMLStencilElement {
    }
    var HTMLGmFootballStandingsElement: {
        prototype: HTMLGmFootballStandingsElement;
        new (): HTMLGmFootballStandingsElement;
    };
    interface HTMLGmStandingHeaderElement extends Components.GmStandingHeader, HTMLStencilElement {
    }
    var HTMLGmStandingHeaderElement: {
        prototype: HTMLGmStandingHeaderElement;
        new (): HTMLGmStandingHeaderElement;
    };
    interface HTMLGmStandingRowElement extends Components.GmStandingRow, HTMLStencilElement {
    }
    var HTMLGmStandingRowElement: {
        prototype: HTMLGmStandingRowElement;
        new (): HTMLGmStandingRowElement;
    };
    interface HTMLElementTagNameMap {
        "gm-football-standings": HTMLGmFootballStandingsElement;
        "gm-standing-header": HTMLGmStandingHeaderElement;
        "gm-standing-row": HTMLGmStandingRowElement;
    }
}
declare namespace LocalJSX {
    interface GmFootballStandings {
        "competition"?: string;
        "publicKey"?: string;
        "season"?: number;
    }
    interface GmStandingHeader {
    }
    interface GmStandingRow {
        "draw"?: number;
        "goalDifference"?: number;
        "goalsAgainst"?: number;
        "goalsFor"?: number;
        "imageUrl"?: string;
        "lost"?: number;
        "name"?: string;
        "playedGames"?: number;
        "points"?: number;
        "position"?: number;
        "won"?: number;
    }
    interface IntrinsicElements {
        "gm-football-standings": GmFootballStandings;
        "gm-standing-header": GmStandingHeader;
        "gm-standing-row": GmStandingRow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gm-football-standings": LocalJSX.GmFootballStandings & JSXBase.HTMLAttributes<HTMLGmFootballStandingsElement>;
            "gm-standing-header": LocalJSX.GmStandingHeader & JSXBase.HTMLAttributes<HTMLGmStandingHeaderElement>;
            "gm-standing-row": LocalJSX.GmStandingRow & JSXBase.HTMLAttributes<HTMLGmStandingRowElement>;
        }
    }
}
