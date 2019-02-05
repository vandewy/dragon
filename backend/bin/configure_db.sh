#!/bin/bash
#Script to drop entire database and re-createdb
#then use .sql files as inputs for table creation

export PGPASSWORD='node_password'

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./sql/generation.sql
psql -U node_user dragonstackdb < ./sql/dragon.sql

echo "dragonstackdb configured"
