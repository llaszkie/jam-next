#!/usr/bin/env python3

# Inspired by https://gist.github.com/jtangelder/e445e9a7f5e31c220be6
# Python3 http.server for Single Page Application

import argparse
import urllib.parse
import http.server
import socketserver
import re
from pathlib import Path
import os 

HOST = ('0.0.0.0', 8000)
pattern = re.compile('.png|.jpg|.jpeg|.js|.css|.ico|.gif|.svg', re.IGNORECASE)


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        url_parts = urllib.parse.urlparse(self.path)
        request_file_path = Path(url_parts.path.strip("/"))

        ext = request_file_path.suffix
        if not request_file_path.is_file() and not pattern.match(ext):
            self.path = 'index.html'

        return http.server.SimpleHTTPRequestHandler.do_GET(self)


def run_server(folder):
    os.chdir(folder)
    httpd = socketserver.TCPServer(HOST, Handler)
    print(f"Serving files from {folder} on http://{HOST[0]}:{HOST[1]}")
    httpd.serve_forever()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Simple HTTP Server")
    parser.add_argument("folder", help="Folder to serve", default=".")
    args = parser.parse_args()

    run_server(args.folder)
