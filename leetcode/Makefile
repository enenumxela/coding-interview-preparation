SHELL = /bin/bash

.DEFAULT_GOAL = help

help:
	@echo ""
	@echo "*****************************************************************************"
	@echo ""
	@echo " Leetcode's Problems' Solutions."
	@echo ""
	@echo "*****************************************************************************"
	@echo ""
	@echo " 1. make go-test ........... run go tests."
	@echo " 2. make go-test-v ......... run go tests with verbose output."
	@echo " 2. make js-test ........... run js tests."
	@echo ""

go-test:
	@go test ./...

go-test-v:
	@go test ./... -v

js-test:
	@yarn run test