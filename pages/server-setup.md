A short guide on how I spin up a server, harden it, and ready it for production.

1. DigitalOcean → New Droplet (Ubuntu 17.10 x64)
    * IPv6 & Monitoring
    * Luke's iMac & Luke's MacBook SSH Keys

2. Login over SSH: `ssh root@[ip]`

3. Add to `known_hosts` in EnPass.

4. Setup new SSH user and add to sudoers.
    1. Add the user: `adduser [username]`
    2. Step through `adduser`.
    3. Add new user to sudoers: `sudo adduser [username] sudo`
    4. Add user credentials to EnPass.

5. Edit SSH settings.
    1. `vim /etc/ssh/sshd_config`
    2. `PermitRootLogin yes` -> `PermitRootLogin no`
    3. Add `AllowUsers [username]`, then `:wq`.
    4. `su [username]`
    5. Copy `authorized_keys` from root to user ~. `mkdir /home/[username]/.ssh && sudo cp /root/.ssh/authorized_keys /home/[username]/.ssh/authorized_keys`
    6. Change ownership of `~/.ssh` from root to user:
        * `sudo chown -R [username]:[username] /home/[username]/.ssh`
        * `sudo chmod 0600 /home/[username]/.ssh/authorized_keys`
    7. Reload the SSH daemon: `sudo service ssh reload`

6. Edit Firewall settings.

    Always good to install a fiewall.

    1. `sudo apt-get install ufw`.
    2. Allow SSH, HTTP, & HTTPS: `sudo ufw allow ssh`, `sudo ufw allow http`, `sudo ufw allow https`.
    3. Enable: `sudo ufw enable`.
    4. Check status: `sudo ufw status verbose`.
    5. Consider allowing SSH connections only from IPs where I expect to be able to log in from.

7. Secure shared memory

    Shared memory ca be used in an attack against a running service.

    1. `sudo vim /etc/fstab`
    2. Add the following line, and save: `tmpfs     /run/shm     tmpfs     defaults,noexec,nosuid     0     0`

8. Setup swapfile

    Swapfiles can be useful when we temporarily need high amounts of RAM (looking at you, npm).

    1. `sudo fallocate -l 1G /swapfile`
    2. `ls -lh /swapfile`
    3. `sudo chmod 0600 /swapfile`
    4. `ls -lh /swapfile`
    5. `sudo mkswap /swapfile`
    6. `sudo swapon /swapfile`
    7. `sudu swapon --show`
    8. `echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`

## Installations

Install optional things like NPM and Node. Surprisingly, [nodejs.org has a guide for this](https://nodejs.org/en/download/package-manager/). This installs Node.js 9 and NPM.

1. `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
2. `sudo apt-get install -y nodejs`

You probably want forever, right?

1. `sudo npm install -g forever`

## Cleanup `/var/www`

Don't need no placeholder folder.

1. `rm -rf /var/www/html`

## Setup guide for `nginx`

We're probably going to use nginx as a reverse proxy so this may help.

1. Install nginx via `sudo apt-get install nginx`.
2. Add nginx to the ufw allow list: `sudo ufw add 'Nginx HTTP'` & `sudo ufw add 'Nginx HTTPS'`.
3. Check the system is running `sudo sytemctl nginx`.

## Taken from:

* https://www.thefanclub.co.za/how-to/how-secure-ubuntu-1604-lts-server-part-1-basics
* http://www.techrepublic.com/article/how-to-harden-ubuntu-server-16-04-security-in-five-steps/
