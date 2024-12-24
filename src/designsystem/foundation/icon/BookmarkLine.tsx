import {SVGProps} from "react";

export default function BookmarkLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5.50994 20.8699C5.65939 20.9546 5.82815 20.9994 5.99994 20.9999C6.17695 20.9951 6.34949 20.9433 6.49994 20.8499L11.8299 17.6499L17.4999 20.8599C17.652 20.9477 17.8244 20.9939 17.9999 20.9939C18.1755 20.9939 18.3479 20.9477 18.4999 20.8599C18.6511 20.7727 18.7767 20.6474 18.8645 20.4965C18.9522 20.3457 18.9989 20.1745 18.9999 19.9999V5.32994C19.0135 4.73026 18.7901 4.1494 18.3783 3.71326C17.9665 3.27712 17.3994 3.02083 16.7999 2.99994H7.19994C6.60047 3.02083 6.03338 3.27712 5.62157 3.71326C5.20977 4.1494 4.98642 4.73026 4.99994 5.32994V19.9999C5.00024 20.1771 5.04763 20.3511 5.13724 20.5039C5.22685 20.6568 5.35547 20.7831 5.50994 20.8699ZM6.49994 19.1004L11.8078 15.9137L17.4999 19.1362V5.31303L17.5003 5.29613C17.5049 5.09098 17.4285 4.89227 17.2877 4.74306C17.1512 4.59854 16.9649 4.51174 16.767 4.49994H7.23292C7.03498 4.51174 6.84868 4.59854 6.71222 4.74306C6.57134 4.89227 6.49493 5.09098 6.49956 5.29613L6.49994 5.31303V19.1004Z"
                  fill="current"/>
        </svg>
    );
}